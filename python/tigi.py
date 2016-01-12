#!/usr/bin/python
import sys

try:
	if(len(sys.argv)==0):
		raise Exception 
	else:
		fajl = open(sys.argv[1], 'r')
		elso = fajl.readline().rstrip('\n')
		hetek = []
		_4talalatdb = []
		_4talalatft = []
		evek=[]
		eredm=[]

		fajl_lista = fajl.read()
		
		lista= fajl_lista.split()

		print len(lista)
		print lista[79]
		for i in range(0, len(lista)):
			if ((i%20)+1==2):
				hetek.append(int(lista[i]))
			elif((i%20)+1==7):
				_4talalatdb.append(int(lista[i]))
			elif((i%20)+1==8):
				_4talalatft.append(int(lista[i]))
			elif((i%20)==0):
				evek.append(int (lista[i]))
		
		max=-1
		print max
		print hetek
		print _4talalatdb
		print _4talalatft
		
		for i in range(0, len(_4talalatdb)):
			if(_4talalatdb[i] > 50):
				eredm.append(int(evek[i]))
				eredm.append(hetek[i])
				eredm.append(_4talalatft[i])
			if(int(max)<_4talalatft[i]):
				e1=evek[i]
				e2=hetek[i]
				max = _4talalatft[i]

		
		ki = open('eredmeny.txt','w')
		for i in range (0,len(eredm),3):
			ki.write(str(eredm[i])+", "+str(eredm[i+1])+":: "+str(eredm[i+2])+" Ft\n")

		ki.write("max 4-es:: "+str(e1)+", "+str(e2))
		fajl.close()
except IOError:
	print 'Nincs ilyen file!'
except Exception:
	print 'Adj meg egy file-t!'