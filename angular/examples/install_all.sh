ls -d */ | xargs -I{} bash -c "cd {}; npm install; cd .."
