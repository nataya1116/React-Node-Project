const express = require("express");

const session = require("express-session");

const dot = require("dotenv");

const fs = require("fs");

const jwt = require("jsonwebtoken");

const path = require("path");

const bcrypt = require("bcrypt");

const mailer = require("nodemailer");

function header() {
  return fs.readFileSync();
}

module.exports = {
  express,
  session,
  dot,
  fs,
  jwt,
  path,
  bcrypt,
  mailer,
};
