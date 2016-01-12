#!/usr/bin/python

import sys
import re
import os.path


class Tetel:
	def __init__(self, str):
		self.fnev = str
		self.f1=open(self.fnev, 'r')
		self.adatok = self.f1.readlines()
		print self.adatok
		self.szamok = map(int, self.adatok)
		print self.szamok
	def szamlal(self, fv):
		count = 0
		for szam in self.szamok:
			if fv(szam):
				count+=1
		return count

	def feltmaxker(self, fv):
		van = False
		for szam in self.szamok:
			if fv(szam) and van:
				if szam>max:
					max=szam
			elif fv(szam) and not van:
				van=True
				max=szam
		return max
	def maxker(self):
		max = self.szamok[0]
		for szam in self.szamok:
			if szam>max:
				max=szam
		return max
		
	def osszegez(self):
		sum = 0
		for szam in self.szamok:
			sum+=szam
		return sum
		
	

def paros(x):
    if x % 2 == 0 : 
        return True
    else:
        return False    

tf = Tetel("in")
print tf.szamlal(paros)
print tf.osszegez()
print tf.maxker()
print tf.feltmaxker(paros)