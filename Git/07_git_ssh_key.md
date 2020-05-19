# Add shh
ssh-keygen -t rsa -b 4096 -C "elvisf.dominguez@gmail.com"
[enter]
[set a phase]
[set same phase]

## valid
ls -al ~/.ssh
[List_of_keys]


# Star SSH agent in the background:
eval "$(ssh-agent -s)"

# Add our SSH key to shh-agent. If you create with different name, replace this on 'id_rsa'
ssh-add ~/.ssh/id_rsa

# ADD a new ssh key to my gitHub
sudo apt-get install xclip
xclip -sel clip < ~/.ssh/id_rsa.pub

## Go to GitHub Page, find config - ssh - add ssh
paste-ssh