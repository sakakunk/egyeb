#!/usr/bin/ruby

if not ARGV.length == 2
	puts "Kevés argumentum!"
	exit
end

if not File.directory?(ARGV[0])
	puts "Nincs ilyen könyvtár!"
	exit
end
run = Integer ARGV[1] rescue nil
if run == nil
	puts "A második argumentum nem jó!"
	exit
end

f1=File.open("result", 'w')

lel = Dir.entries(ARGV[0])
Dir.chdir(ARGV[0])
lel.each do |i|
	if ( i =~ /.rb/ )
		f1.write(i)
		for j in 1..run
			res = `ruby #{i}`
			if res=="1"
				f1.write(" :: OK")
			else
				f1.write(" :: WRONG")
			end
		end
		f1.write("\n")
	end
end

f1.close