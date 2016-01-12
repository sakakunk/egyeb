from bead import Tetel 

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
