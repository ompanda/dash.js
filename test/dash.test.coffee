chai = require 'chai'
chai.should()

Dash = require '../source/dash.coffee'

describe "Dash", ->
    it "isConnected should be false initially", ->
        dash = new Dash
        dash.isConnected.should.equal false