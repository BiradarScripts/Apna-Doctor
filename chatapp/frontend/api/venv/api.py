from flask import Flask,render_template,request,jsonify
import pickle
import json
import pandas as pd

app=Flask(__name__)
clf=pickle.load(open('model.pkl','rb'))

# @app.route('/api/ml',methods=['GET','POST'])

def postContent():
    data=(request.json)
    print(data)
    return {}


def predict():
    firstparameter=request.form.get('firstparameter')
    secondparameter=request.form.get('secondparameter')
    thirdparameter=request.form.get('thirdparameter')
    fourthparameter=request.form.get('fourthparameter')
    fifthparameter=request.form.get('fifthparameter')
    sixthparameter=request.form.get('sixthparameter')
    seventhparameter=request.form.get('seventhparameter')
    eightthparameter=request.form.get('eightthparameter')
    ninthparameter=request.form.get('ninthparameter')
    tenthparameter=request.form.get('tenthparameter')
    eleventhparameter=request.form.get('eleventhparameter')
    twelvethparameter=request.form.get('twelvethparameter')
    thirtenthparameter=request.form.get('thirtenthparameter')
    fourtenthparameter=request.form.get('fourtenthparameter')
    fiftenthparameter=request.form.get('fiftenthparameter')
    sixtenthparameter=request.form.get('sixtenthparameter')
    seventithparameter=request.form.get('seventithparameter')
    eigthinthparameter=request.form.get('eigthinthparameter')

    # prediction= clf.predict([[firstparameter,secondparameter,thirdparameter,fourthparameter,fifthparameter,sixthparameter,seventhparameter,eightthparameter,ninthparameter,tenthparameter,eleventhparameter,twelvethparameter,thirtenthparameter,fourtenthparameter,fiftenthparameter,sixtenthparameter,seventithparameter,eigthinthparameter]])
    prediction = clf.predict([[0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0]])
    prediction_str = str(prediction[0]) 
    print(prediction) 
    return { 'prediction_str': prediction_str}

if __name__=='__main__':
    app.run(debug=True) 