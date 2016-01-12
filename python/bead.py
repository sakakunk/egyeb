#!/usr/bin/python

import sys
import os.path

if len(sys.argv)!=2:
	print "Adj meg egy file-t!"
else:
	if os.path.isfile(sys.argv[1]):
		f1=open(sys.argv[1], 'r')
		f2 = open('eredmeny.txt', 'w')
		data = f1.readline()
		max=-1
		ind=-1
		indyear=-1
		while data!='':
			data = f1.readline()
			datalist = data.split()
			if data!='':
				if int(datalist[6])>50:
					print datalist[6]
					f2.write(datalist[0] + ', ' + datalist[1] + ':: ' + datalist[7] + ' Ft\n')
				if int(max) < int(datalist[7]):
					max = datalist[7]
					indyear=datalist[0]
					ind = datalist[1]
		f2.write('max 4-es:: ' + indyear + ', ' + ind)
	else:
		print "Nincs ilyen file!"