"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var navbar_1 = require("@/components/navbar");
var hero_section_1 = require("@/components/hero-section");
var features_section_1 = require("@/components/features-section");
var security_section_1 = require("@/components/security-section");
var testimonials_section_1 = require("@/components/testimonials-section");
var footer_1 = require("@/components/footer");
function Home() {
    return (<main className="animated-gradient-bg min-h-screen">
      <navbar_1.default />
      <hero_section_1.default />
      <features_section_1.default />
      <security_section_1.default />
      <testimonials_section_1.default />
      <footer_1.default />
    </main>);
}
