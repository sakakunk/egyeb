#!/usr/bin/ruby

if not ARGV.length == 1
	puts "Adj meg egy könyvtárt!"
	exit
end

if not File.directory?(ARGV[0])
	puts "Nincs ilyen könyvtár!"
	exit
end

f1=File.open("result", 'w')

lel = Dir.entries(ARGV[0])
Dir.chdir(ARGV[0])
lel.each do |i|
	if ( i =~ /.rb/ )
		res = `ruby #{i}`
		if res=="1"
			f1.write(i+" :: OK\n")
		else
			f1.write(i+" :: WRONG\n")
		end
	end
end

f1.close