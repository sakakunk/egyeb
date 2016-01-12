import math
f1=open('adat-szamol.txt', 'r')
readdata = f1.readlines()
data = readdata[0]
splittedData= data.split(' ')
print splittedData
constNumber = 178.44
counter = 0
for s1 in splittedData:
	fl =float(s1)
	counter += pow(fl-constNumber, 2)
print counter
print math.sqrt((1./14.)*counter)