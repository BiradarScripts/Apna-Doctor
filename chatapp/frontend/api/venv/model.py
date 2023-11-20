import numpy as np
import pandas as pd
import pickle

df=pd.read_excel('neuro-diseases.xlsx')

convert={'Motor function sensation':{'yes':1,'no':2},
         'coordination and balance':{'yes':1,'no':2},
         'reflexes':{'yes':1,'no':2},
         'bowl and bladder control':{'yes':1,'no':2},
         'memory':{'yes':1,'no':2},
         'mood/depression/anxiety':{'yes':1,'no':2},
         'Swallowing/eating and related':{'yes':1,'no':2},
         'Hallucination,delusion and paronia/dimentia':{'yes':1,'no':2},
         'Sleep pattern':{'yes':1,'no':2},
         'speech':{'yes':1,'no':2},
         'gait assesment':{'yes':1,'no':2},
         'sensory/feeling/Numbness/Paralysis/Nausea':{'yes':1,'no':2},
         'breathing':{'yes':1,'no':2},
         'Headache':{'yes':1,'no':2},
         'Shaking/Seizures/fever':{'yes':1,'no':2},
         'confusion/consioucness':{'yes':1,'no':2},}

df.replace(convert,inplace=True)

xc=['Motor function sensation','coordination and balance','reflexes','bowl and bladder control','body','memory','mood/depression/anxiety','Swallowing/eating and related','Hallucination,delusion and paronia/dimentia','Sleep pattern','speech', 'gait assesment','sensory/feeling/Numbness/Paralysis/Nausea','breathing','cranial nerves','Headache','Shaking/Seizures/fever','confusion/consioucness']
y={'Spinal Cord Injury','Alzehimers','Amyotrophic Lateral Sclerosis','Ataxia',"Bell's Palsy",'Brain Tumors','Cerebral Aneurysm','Epilepsy and Seizured','Guillain-Barre Syndrome','Hydrocephalus','Lumbar Disk Disease','Meningitis','Multiple Sclerosis','Muscular Dystrophy','Neurocutaneous Syndrome',"Parkinson's Disease",'Stroke(Brain-Attack)','Cluster Headache','Tension Headache','Encephalitis','Septicemia','Myasthenia Gravis'}
all_inputs=df[xc]
all_classes=df['Disease']

from sklearn.tree import DecisionTreeClassifier
clf=DecisionTreeClassifier()

clf.fit(all_inputs,all_classes)

pickle.dump(clf,open('model.pkl','wb'))
print(clf.predict([[1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1]]))
