from flask import Flask, render_template, request
import pickle
import numpy as np

model = pickle.load(open('model', 'rb'))

app = Flask(__name__)



@app.route('/crop-recommendation')
def man():
    return render_template('home.html')


@app.route('/predict', methods=['POST'])
def home():
    data1 = request.form['a']
    data2 = request.form['b']
    data3 = request.form['c']
    data4 = request.form['d']
    data5 = request.form['e']
    data6 = request.form['f']
    data7 = request.form['g']
    arr = np.array([[data1, data2, data3, data4, data5, data6, data7]])
    predict1 = model.predict(arr)
    
    crop_name = str()
    
    if predict1 == 0:                                                                                              # Above we have converted the crop names into numerical form, so that we can apply the machine learning model easily. Now we have to again change the numerical values into names of crop so that we can print it when required. 
        crop_name = 'Apple(सेब)'
    elif predict1 == 1:
        crop_name = 'Banana(केला)'
    elif predict1 == 2:
   		crop_name = 'Blackgram(काला चना)'
    elif predict1 == 3:
   		crop_name = 'Chickpea(काबुली चना)'
    elif predict1 == 4:
   		crop_name = 'Coconut(नारियल)'
    elif predict1 == 5:
   		crop_name = 'Coffee(कॉफ़ी)'
    elif predict1 == 6:
   		crop_name = 'Cotton(कपास)'
    elif predict1 == 7:
   		crop_name = 'Grapes(अंगूर)'
    elif predict1 == 8:
   		crop_name = 'Jute(जूट)'
    elif predict1 == 9:
   		crop_name = 'Kidneybeans(राज़में)'
    elif predict1 == 10:
   		crop_name = 'Lentil(मसूर की दाल)'
    elif predict1 == 11:
   		crop_name = 'Maize(मक्का)'
    elif predict1 == 12:
   		crop_name = 'Mango(आम)'
    elif predict1 == 13:
   		crop_name = 'Mothbeans(मोठबीन)'
    elif predict1 == 14:
   		crop_name = 'Mungbeans(मूंग)'
    elif predict1 == 15:
   		crop_name = 'Muskmelon(खरबूजा)'
    elif predict1 == 16:
   		crop_name = 'Orange(संतरा)'
    elif predict1 == 17:
   		crop_name = 'Papaya(पपीता)'
    elif predict1 == 18:
   		crop_name = 'Pigeonpeas(कबूतर के मटर)'
    elif predict1 == 19:
   		crop_name = 'Pomegranate(अनार)'
    elif predict1 == 20:
   		crop_name = 'Rice(चावल)'
    elif predict1 == 21:
   		crop_name = 'Watermelon(तरबूज)'
    
    return render_template('after.html', data=crop_name)


if __name__ == "__main__":
    app.run(debug=True)















