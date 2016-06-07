array=( "01" "02" "03" )
for i in "${array[@]}"
do
	ffmpeg -i $i.m4a -c:a aac -b:a 40k output/$i.m4a
done