#!/usr/bin/python

import sys
import os.path

if len(sys.argv)!=2:
	print "Adj meg egy file-t!"
else:
	if os.path.isfile(sys.argv[1]):
		filesplit = sys.argv[1].split(".")
		macros={}
		f1 = open(sys.argv[1],'r')
		if filesplit[-1]!="py":
			f2 = open(sys.argv[1]+"_out.py",'w')
		else:
			f2 = open(sys.argv[1][:len(sys.argv[1])-3]+"_out.py",'w')
		data="extr"
		while data!='':
			data = f1.readline()
			datasp = data.split()
			if len(datasp)>0:
				res = []
				if datasp[0]=="#::":
					macros[datasp[1]]=datasp[2]
				else:
					for d in datasp:
						if d in macros.keys():
							res.append(macros[d])
						else:
							res.append(d)
				strres = ' '.join(res)
				if strres!="":
					f2.write(strres+"\n")
	else:
		print "Nincs ilyen file!"