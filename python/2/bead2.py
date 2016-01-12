#!/usr/bin/python

import sys
import re
import os.path


class EgySor:
    def __init__(self, list):
        self.szerzo = list[0]
        self.cim = list[1]
        self.oldalszam = list[2]
        self.kiadas_eve = list[3]
        self.kiado = list[4]
        self.allapot = list[5]
        self.tmp = list[6].split()
        self.arTmp = self.tmp[0]
        self.ar = int(self.arTmp)
        self.raktari_jel = list[7]
        self.megjegyzes = list[8]
        self.tema = list[9]
    def fv(self) :
		return self.raktari_jel;

def getdata(fname):
	f = open(fname, 'r')
	d = f.read()
	dl = re.split(r'\n', d)
	res=[]
	for i in dl:
		if i!='':
			res.append(i)
	return res
	

if os.path.isfile("keszlet.txt"):
	f1 = open("keszlet.txt", 'r')
	f2 = open('ujkeszlet.txt', 'w')
	data = f1.readline()
	fstline=data
	allData = []
	data5 = getdata("5.txt")
	data10 = getdata("10.txt")
	while data!='':
		data = f1.readline()
		if data!="":
			datalist = re.split(r'\t',data);
			es=EgySor(datalist)
			allData.append(es)
	f2.write(fstline)
	for d in allData:
		if d.raktari_jel in data5:
			d.ar = int(d.ar*0.95)
		if d.raktari_jel in data10:
			d.ar = int(d.ar*0.90)
		f2.write(d.szerzo + '\t' + d.cim +'\t' + d.oldalszam + '\t' + d.kiadas_eve + '\t' +d.kiado + '\t' + d.allapot + '\t' + str(d.ar) + " Ft" + '\t' + d.raktari_jel + '\t' + d.megjegyzes + '\t' + d.tema)
	
else:
	print "Nincs ilyen file!"