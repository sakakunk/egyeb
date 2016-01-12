f = open("tmp","r")
x = f.gets.to_i
f.close
f = open("tmp","w")
if x == 0
   f.write("1")
else
   f.write("0") 
end
f.close
print x

