<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Projects;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Projects::create([
            'title' => 'FDE',
            'date' => 'Siemens · 2023-2024',
            'text' => 'The FDE (Field Data Enablement) Gateway is a brownfield gateway device designed to be used in an industrial environment to collect data from field devices over various protocols (such as Modbus, USS, BLE and more) and transmit it to the cloud via MQTT.  As a developer on the project from April 2023 until its unfortunate cancellation in September 2024, I carried out development tasks on various areas of the project, including both the firmware, developed in C++ on top of the existing internal Cactus framework, and the Web-based configuration gateway, developed in TypeScript/Vue.  Although the FDE only ever saw limited release, I consider it a valuable development experience in working with embedded devices and enterprise-scale projects.',
            'url' => 'https://www.siemens.com/global/en/products/automation/systems/industrial/field-data-enablement.html',
            'imagePath' => './files/FDE-image.jpg',
        ]);
        Projects::create([
            'title' => 'International Spending Tracker',
            'date' => 'Personal Project · 2022-2023',
            'text' => 'This Android app allows you to log, categorize and track expenses, with automatic currency conversion across over 150 currencies and up-to-date rates via API. Expenses can then be viewed in both graph and calendar format.  I developed this app in Java using Android Studio, both to explore the app development process, and to have the final product for my own use - as both a frequent traveller and someone who prefers to have control over my spending habits, currency conversions were a constant headache while abroad.<br /><br />The app can be downloaded for free on the linked Play Store page.',
            'url' => 'https://play.google.com/store/apps/details?id=com.spendingtracker&hl=en&pli=1',
            'imagePath' => 'https://play-lh.googleusercontent.com/BJEapw9zUdCtr5XZjo4LXKmcrSBpOyeBaET1P7uWhpJu0UIhuEF-bndMXFsXcMIzJQ=w240-h480-rw',
        ]);
        Projects::create([
            'title' => 'This website!',
            'date' => 'Personal Project · 2024-2025',
            'text' => 'This site was created as a personal project to both build and showcase my development skills, as well as to provide a platform for my resume and portfolio.  The site is built using Vue.js and TypeScript, and was originally created with a backend using Express.js, but has since been refactored into a Frontend-only webapp for ease of hosting.  The site features customizable content via a CMS, and will be further updated with new features such as built-in translations and a mobile-friendly layout.',
        ]);
    }
}
