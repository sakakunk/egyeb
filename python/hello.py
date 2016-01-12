"""
x = "majom \" mann \" makk"
print x
"""
"""
num = 18
print "sakakunk id" + str(num)
num2 = 32
print "my mum is " + `num2`
print "haha " + repr(56)
"""
"""
#b = input("Enter name: ") # nem string, nem lehet printleni
b = raw_input("Enter name: ") # string, printelheto
print b
"""
"""
family = ['mom', 'dad', 'bro', 'sis', 'dog'] #lista
print family[3]
print family[-2]
print 'sakakunk'[3]

example = [0,1,2,3,4,5,6,7,8,9]
print example[4:8] #veszi a zart 4 nyilt 8 intevallumot
print example[-5:-1] 
print example[2:] #vegeig megy
print example[:5] #vegeig megy
print example[:] #visszaadja a listat
print example[1:8:2] #minden masodikat adja
print example[9:0:-1] #minusszal visszafele megy amlistan
print family[2:5]
"""
"""
c = [7,4,5]+[1,2,3]
print c
print "sakakunk"*5
print [21]*10
name='sakakunk'
print 'z' in name
print 's' in name
family = ['mom', 'dad', 'bro', 'sis', 'dog']
print 'bro' in family
print 'cat' in family
"""
"""
numbers = [8,5,89,1,45,23,6]
print len(numbers)
print max(numbers)
print min(numbers)

print list('sakakunk')
numbers[3] = 20
print numbers

del numbers[3]
print numbers
"""
"""
example=list('majomann')
print example
example[4:] = list('baby') #replace
print example
example[4:] = list('csicskahopp') #replace
print example
example2=[7,8,9]
print example2
example2[1:1]=[3, 3, 3] # add
print example2
example2[1:5] = [] #delete
print example2
"""
"""
face=[21,18,30]
face.append(40)
print face

sakakunk=['i', 'love', 'apples', 'apples', 'apples']
print sakakunk.count('apples')
print sakakunk.count('bears')

one =[1,2,3]
two =[4,5,6]
one.extend(two)
print one
"""
"""
say = ['hey', 'now', 'brown', 'cow']
print say.index('brown')
say.insert(2, 'hoss')
print say
print say.pop(1)
print say

say.remove('brown')  # nem returnol
print say
say.reverse()
print say
"""
"""
lista = [32,54,22,7,98,1]
lista.sort()
print lista
print sorted("majomann")
tuple =(32, 32, 43, 54) # nem modosithato
print tuple[1]
"""
"""
a="Hey there, %s, van %s ?"
asdf =('majomann', 'szappan')
print a % asdf
qwe = ('saka','babfoelek')
print a % qwe

example="Hello bello mizu ?"
print example.find('bello')
print example.find('H')
"""
"""
seq=['hey', 'there', 'bessie', 'majom']
glue=' '
print glue.join(seq)
randomstr ="I wish I Had NO sausage"
print randomstr.lower()
truth="I love all women"
print truth.replace('women', 'beer')
"""
"""
book = {'Dad':'Bob', 'Mom':'Lisa', 'Bro':'Joe'}
print book['Dad']
print book['Mom']
ages = {'Dad':'42', 'Mom':'87'}
print ages['Dad']
book.clear()
print book
tuna = ages.copy()
print tuna
print tuna.has_key('Mom')
print tuna.has_key('Apples')
"""
"""
tuna="fish"
if tuna=="fihhsh":
	print 'this is not a fish'
elif tuna=='fish':
	print "this is a fish"
else:
	print 'IDK whats this'
"""
"""
thing = "animal"
animal = "cat"
if thing == "animal":
	if animal == "cat":
		print "this is a cat"
	else:
		"IDK animal"
else:
	print "IDK
"""
"""
one =[21, 22, 23]
two =[21, 22, 23]

print one is two

three = four = [3,4,5]
print three is four

one = two
print one is two

pizza = "pizzahut"
print 's' in pizza
print 'z' in pizza

"""
"""
print "dog" < "cat"
example = 5
if example > 3 and example < 10:
	print "between 3 and 10"
if example > 3 or example <4:
	print "works"
"""
"""
b =1
while  b<=10:
	print b
	b+=1

gl=['bread', 'milk', 'meat', 'beef']
for food in gl:
	print 'I want ' +  food

ages={'dad':42, 'mom':48, 'Lisa':7} # ez a vmi magatol sorbarakja az elemeket
for item in ages:
	print item
	print item, ages[item]

while 1:
	name=raw_input('Enter name: ')
	if name == "quit":
		break #kilep a ciklusbol
"""
"""
def whatsup(x):
	return "Whats up " + x

print whatsup("sakakunk")

def plusten(y):
	return y + 10

print plusten(44)

def names(first, last):
	print '%s %s' % (first, last)
	
names('sakakunk', 'majomann')

def name2(first='asdf', last='qwer'):
	print '%s %s' % (first, last)

name2()
name2('kiskutya', 'babfozelek')
name2('kiskutya')
name2('kiskutya')
name2(last='szappan')
"""
"""
def list(*food): #ismeretlen a parameterek szama, tuplet csinal belole
	print food

list('apples')
list('apples', 'milk', 'beef')

def profile(name, *ages):
	print name
	print ages
	
profile('saka', 42, 43, 76, 54, 98)
"""
"""
def cart(**items): #kulcs ertek parokat var
	print items
	
cart(apples=4, peaches=6, beef=60)

def profile(first, last, *ages, **items):
	print first, last
	print ages
	print items

profile('saka', 'majomann', 20, 30, 65, 100, bacon=4, szappan=10, majom=20)

"""
"""
def example(a, b, c):
	return a+b*c

tuna =(5,7,3)
print example(*tuna)

def example2(**vmi):
	print vmi

bacon={'mom':32, 'dad':54}
example2(**bacon)
"""
"""
class exampleClass:
	eyes="blue"
	age=22
	def method1(self):
		return 'method1 :)'

object1 = exampleClass()
print object1.eyes
print object1.age
print object1.method1()
"""
"""
class example:
	def createName(self, name):
		self.name=name
	def displayName(self):
		return self.name
	def saying(self):
		print "hello %s" % self.name
		
first=example()
second=example()
first.createName('sakakunk')
second.createName('tony')
print first.displayName()
second.saying()
"""
"""
class parentClass:
	var1="Iam v1"
	var2="Iam v2"
class childClass(parentClass): #szarmaztatas
	pass #necsinaljon semmit, de tudja h hol a vege a osztalynak
	
parentObject=parentClass()
print parentObject.var1
childObject = childClass()
print childObject.var1
print childObject.var2
"""
"""
class parent:
	var1="bacon"
	var2="milk"

class child(parent):
	var2="toast"
	
p1 = parent()
c1 = child()
print p1.var1
print c1.var1
print p1.var2
print c1.var2
"""
"""
class Mom:
	var1 ="hi mom"
class Dad:
	var2="am ur dad"
	
class child(Mom, Dad):
	var3="child :)"

	
childObject=child()
print childObject.var1
print childObject.var2
print childObject.var3
"""
"""
#konstruktor

class swine:
	def __init__(self): #konstruktor
		print "this is a constructor"
		print "etc..."
	def apples(self):
		print "beef pie"
		
s1=swine() # konstruktor hivas
s1.apples()
"""
""" 
#modul letrehozasa, a python telepitesi mappajaba kell elmenteni tetszoleges.py neven
#hasznalata :
# import tetszoleges (es nem kell a .py)
def testModule():
	print "muhaha"

#masik fileban:
tetszoleges.testModule()
"""
"""
import math
print dir(math) #lekeri egy modulban levo metodusok nevet
print help(math) #kb doksi szintu info egy modulhoz
"""

#filemuveletek
"""
f1 = open('c:/Users/Adam/Desktop/2/python/a.txt', 'w') #file object, helye, lathatosaga: w: write, r: read
f1.write('majomann ezt kiija a fileba')
f1.close()
f2 = open('c:/Users/Adam/Desktop/2/python/a.txt', 'r') #read only
print f2.read(8) #parametere hany haraktert akarsz olvasni (egeszen pontosan hany bajtot)
print f2.read() #kiolvas mindent attol a ponttol, ahol tartottunk
f2.close()
"""

#soronkenti olvasas
"""
f1=open('c:/Users/Adam/Desktop/2/python/a.txt', 'r')
print f1.readline() # egy sor
print f1.readlines() # minden sor, listaba teszi oket
f1.close()
f2=open('c:/Users/Adam/Desktop/2/python/a.txt', 'w')
f2.write('this is a new line\nsecond line\n') #soronkent irja ki a fileba
f2.close()
"""

#edit file

f1=open('c:/Users/Adam/Desktop/2/python/a.txt', 'r')
list1 = f1.readlines()
f1.close()
list1[2] = "we have just changed this line\n"
f2=open('c:/Users/Adam/Desktop/2/python/a.txt', 'w')
f2.writelines(list1)
f2.close()