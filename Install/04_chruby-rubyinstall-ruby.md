## chruby
´´´sh
# install chruby using wget (X Don't use brew for this step!!)
wget -O chruby-0.3.9.tar.gz https://github.com/postmodern/chruby/archive/v0.3.9.tar.gz
tar -xzvf chruby-0.3.9.tar.gz
cd chruby-0.3.9/
sudo make install

# exit or return back
cd ..
´´´

## ruby-install and ruby
´´´sh
# run this for add packages
sudo apt-get install -y build-essential bison zlib1g-dev libyaml-dev libssl-dev libgdbm-dev libreadline-dev libffi-dev

# install ruby-install (only available with brew)
brew install ruby-install

# Add a ruby version that you want!
ruby-install ruby 2.7.2
´´´

## Configuration
Add the following to the ~/.bashrc
´´´sh
source /usr/local/share/chruby/chruby.sh
source /usr/local/share/chruby/auto.sh # For auto-switch
´´´
## Commands
´´´sh
# List version of ruby installed
chruby

# Define a default version
chruby ruby-1.9
´´´

If you have enabled auto-switching, simply create a ´.ruby-version´ file:
´´´sh
echo "ruby-1.9" > ~/.ruby-version
´´´
