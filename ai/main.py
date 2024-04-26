from flask import Flask, request, jsonify, redirect, url_for
import numpy as np
import joblib
from flask_cors import CORS
import cv2
from keras.models import load_model
from PIL import Image
import json

app = Flask(__name__)
CORS(app)


def loadKerasModel(imgRes=None):
  if imgRes is None:
    return {"prediction": "No image provided"}
  model = load_model('Braintumor.keras')
  if isinstance(imgRes, str):
    # If imgRes is a string (file ̧path), try loading the image
    image = cv2.imread(imgRes)
    imgNm = imgRes
    if image is None:
      return {"error": "Failed to read the image file"}
  else:
    # Assuming imgRes is already a file object (like request.files['image'])
    image_data = imgRes.read()
    imgNm = imgRes.filename
    image = cv2.imdecode(np.frombuffer(image_data, np.uint8), cv2.IMREAD_COLOR)

  if image is None:
    return {"error": "Image not found"}
  img = Image.fromarray(image)
  img = img.resize((64, 64))
  img = np.array(img)
  input_img = np.expand_dims(img, axis=0)
  result = np.argmax(model.predict(input_img), axis=-1)  # Get the scalar value
  print(result)
  if result[0] == 0:
    prediction = 'no tumor'
  else:
    prediction = 'tumor found'
  return {"prediction": prediction + " in " + imgNm}


def loadBrainModel2(vals, modelNm):
  model = joblib.load(modelNm)
  scaler = joblib.load('scaler.pkl')
  sample = [[0, 44.0, 0, 0, 1, 2, 0, 110.41, 30.5, 3]]
  X_test_std = scaler.transform(sample)
  print(X_test_std)
  res = model.predict(X_test_std)
  print(res)
  if res[0] == 0:
    prediction = 'not found'
  else:
    prediction = 'found'
  return {"prediction": prediction}

def loadHeartModel2(vals, modelNm):
  print("running model",modelNm)
  model = joblib.load(modelNm)
  sample = vals or [[45,1,1876,1,35,0,226000,0.9,138,1,0,88]]
  print(sample)
  res = model.predict(sample)
  print(res)
  if res[0] == 0:
    prediction = 'not found'
  else:
    prediction = 'found'
  return { "prediction": prediction }

@app.route("/brain", methods=['POST', "GET"])
def brain():
  return redirect(url_for('brain1'))


@app.route('/brain/1', methods=['GET', 'POST'])
def brain1():
  image_file = None
  if request.method == 'POST':
    print(
        request.args.to_dict(),
        request.files,
    )
    image_file = request.files['image']
  return jsonify(loadKerasModel(image_file or "y99.jpg"))

@app.route('/brain/2', methods=['GET', 'POST'])
def brain2():
  vals = None
  if request.method == 'POST':
      data = request.json
      if data:  # Check if JSON data exists
          vals = data.values()
  print(vals, "data gotten", request.json)
  return jsonify(loadBrainModel2(vals and [list(vals)], "dt.sav"))

@app.route("/heart", methods=['POST', "GET"])
def heart():
  return redirect(url_for('heart1'))


@app.route('/heart/1', methods=['GET', 'POST'])
def heart1():
  vals = None
  if request.method == 'POST':
      data = request.json
      if data:  # Check if JSON data exists
          vals = data.values()
  print(vals, "data gotten", request.json)
  return jsonify(loadHeartModel2([list(vals)] if vals else [[ 1.       ,   0. ,         1.      ,    0.  ,        0.   ,      1.,
      1.    ,      0.      ,    1.      ,    0.  ,        1.      ,    0.,
      0.     ,     1.    ,      1.    ,      0.     ,     1.  ,        0.,
      1.       ,   0.   ,       1.  ,        0.     ,     1.  ,        0.,
      1.      ,    0.  ,        1.    ,      0.  ,        1.     ,     0.,
      1.     ,     0.  ,        0.    ,      1.  ,        1. ,         0.,
      1.      ,    0.  ,        0.   ,       1.  ,        1.   ,       0.,
      1.        ,  0.  ,        1.    ,      1.   ,       0.    ,      1.,
      0.       ,   1.    ,      0.  ,        1. ,         0.    ,      1.,
      0.       ,   1.    ,      0.    ,      1.    ,      0.   ,      -0.8575992,
      1.1003343 , -1.25814528,  2.42341694, -1.03425361 , 0.54603133, -0.29205145,
     -0.210758   , 0.20099422 , 0.15157623  ,0.92642209, -0.21621187 , 0.47378253,
      0.0289432 , -0.50430774, -0.26217925 , 0.67971855 , 2.27002653 ,-2.0803844,
      0.86515966 , 0.31068636 , 2.         , 0.        ,  3.        ]],"lgbm.joblib"))


@app.route('/heart/2', methods=['GET', 'POST'])
def heart2():
    vals = None
    if request.method == 'POST':
        data = request.json
        if data:  # Check if JSON data exists
            vals = data.values()
    print(vals, "data gotten", request.json)
    return jsonify(loadHeartModel2(vals and [list(vals)], "Rn.sav"))


@app.route("/")
def index():
  return "Hello, server started"


@app.route("/health")
def health():
  return "healthy"


# eg: predict?N=20&P=30&K=40&temperature=40.0&humidity=20&ph=30&rainfall=50

if __name__ == '__main__':
  app.run("0.0.0.0", port=80)
