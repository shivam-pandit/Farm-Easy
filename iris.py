import pandas as pd                                                       # Importing pandas library
from sklearn import preprocessing   
from sklearn.neighbors import KNeighborsClassifier                        # Importing Knn Classifier from sklearn library.
import numpy as np                                                        # Importing numpy to do stuffs related to arrays


import pickle


excel = pd.read_excel('Crop.xlsx', header = 0) 
le = preprocessing.LabelEncoder()                                         # Various machine learning algorithms require numerical input data, so you need to represent categorical columns in a numerical column. In order to encode this data, you could map each value to a number. This process is known as label encoding, and sklearn conveniently will do this for you using Label Encoder.
crop = le.fit_transform(list(excel["CROP"]))                              # Mapping the values in weather into numerical form.


NITROGEN = list(excel["NITROGEN"])                                        # Making the whole row consisting of nitrogen values to come into nitrogen. 
PHOSPHORUS = list(excel["PHOSPHORUS"])                                    # Making the whole row consisting of phosphorus values to come into phosphorus. 
POTASSIUM = list(excel["POTASSIUM"])                                      # Making the whole row consisting of potassium values to come into potassium. 
TEMPERATURE = list(excel["TEMPERATURE"])                                  # Making the whole row consisting of temperature values to come into temperature.
HUMIDITY = list(excel["HUMIDITY"])                                        # Making the whole row consisting of humidity values to come into humidity.
PH = list(excel["PH"])                                                    # Making the whole row consisting of ph values to come into ph.
RAINFALL = list(excel["RAINFALL"])                                        # Making the whole row consisting of rainfall values to come into rainfall.
features = list(zip(NITROGEN, PHOSPHORUS, POTASSIUM, TEMPERATURE, HUMIDITY, PH, RAINFALL))                     # Zipping all the features together 
features = np.array([NITROGEN, PHOSPHORUS, POTASSIUM, TEMPERATURE, HUMIDITY, PH, RAINFALL])                    # Converting all the features into a array form     

features = features.transpose()                                                                                # Making transpose of the features 
print(features.shape)                                                                                          # Printing the shape of the features after getting transposed.
print(crop.shape)                                                                                              # Printing the shape of crop. Please note that the shape of the features and crop should match each other to make predictions.


model = KNeighborsClassifier(n_neighbors=3)                                                                    # The number of neighbors is the core deciding factor. K is generally an odd number if the number of classes is 2. When K=1, then the algorithm is known as the nearest neighbor algorithm.
knn = model.fit(features, crop)                                                                                      # fit your model on the train set using fit() and perform prediction on the test set using predict().

filename = 'model'
pickle.dump(knn, open(filename,'wb'))







# df = pd.read_csv('iris.data')

# X = np.array(df.iloc[:, 0:4])
# y = np.array(df.iloc[:, 4:])

# from sklearn.preprocessing import LabelEncoder
# le = LabelEncoder()
# y = le.fit_transform(y.reshape(-1))

# from sklearn.model_selection import train_test_split
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# from sklearn.svm import SVC
# sv = SVC(kernel='linear').fit(X_train,y_train)


# pickle.dump(sv, open('iri.pkl', 'wb'))
