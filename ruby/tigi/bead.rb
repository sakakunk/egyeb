#!/usr/bin/env ruby


cont=[]
ered=[]
directs=[]
daf=[]


begin
ki = File.new("result", "w:UTF-8");


if(ARGV.size==0)
	raise ArgumentError;
elsif(!Dir.exist?(ARGV[0]))
	raise IOError;
else
	Dir.chdir(ARGV[0])
	
	Dir.glob('*.rb') { |n|
	 
		etw=`ruby #{n}`
		#puts etw
		directs.push(etw);
		cont.push(n);
		#print n
	}
	
	
	print directs
	#directs.push(etw)
	#cont.push(n+"")



for i in 0..(cont.size-1)
	
	if(directs[i].to_s.chomp.to_i==1)
		ki.write(cont[i].to_s.chomp+" :: "+"OK\n");
	elsif(!directs[i].to_s.chomp.to_i !=1)
		ki.write(cont[i].to_s.chomp+" :: "+"WRONG\n");
	elsif(directs[i].to_s.chomp.to_i==1&& i == cont.size-1)
		ki.write(cont[i].to_s.chomp+" :: "+"OK");
	else(directs[i].to_s.chomp.to_i !=1&& i == cont.size-1)
		ki.write(cont[i].to_s.chomp+" :: "+"WRONG");
	end
	
	
end
end
rescue ArgumentError=>e
		print "Adj meg egy konyvtart!"
		

rescue IOError=>e
			print "Nincs ilyen konyvtar!"
end