# encoding: utf-8
require 'rubygems'

Dir['*.rake'].each { |rake| load rake }

task :default => [:optimize]

