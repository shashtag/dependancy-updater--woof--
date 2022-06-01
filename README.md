[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7947212&assignment_repo_type=AssignmentRepo)

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dyte-submissions/dyte-vit-2022-shashtag">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Wooff</h3>

  <p align="center">
    Cli tool to check and update dependencies.
    <br />
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-shashtag"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-shashtag">View Demo</a>
    ·
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-shashtag/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-submissions/dyte-vit-2022-shashtag/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#markdown-header-checking-installation">Checking Installation</a>
        </li>
        <li>
          <a href="#markdown-header-entering-arguments">Entering Arguments</a>
        </li>
        <li>
          <a href="#markdown-header-updating-repos">Updating Repos</a>
        </li>
      </ul>
    </li>
    <li><a href="#markdown-header-miscellaneous-screenshots">Miscellaneous Screenshots</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/dyte-submissions/dyte-vit-2022-shashtag)

* A fast, reliable way to check and update your dependencies in all your repositories.
* Easy to install and use comman line interface.
* Appealing UI.
* Propper error messages and information prompts.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Node.js](https://nodejs.org/en/)
-   [octokit.js](https://github.com/octokit/octokit.js)
-   [create-node-cli](https://www.npmjs.com/package/create-node-cli)
-   [chalk](https://www.npmjs.com/package/chalk)
-   [cli-alerts](https://www.npmjs.com/package/cli-alerts)
-   [cli-handle-unhandled](https://www.npmjs.com/package/cli-handle-error)
-   [cli-meow-help](https://www.npmjs.com/package/cli-meow-help)
-   [cli-welcome](https://www.npmjs.com/package/cli-welcome)
-   [csv-parse](https://www.npmjs.com/package/csv-parse)
-   [github-url-to-object](https://www.npmjs.com/package/github-url-to-object)
-   [inquirer](https://www.npmjs.com/package/inquirer)
-   [loading-cli](https://www.npmjs.com/package/loading-cli)
-   [meow](https://www.npmjs.com/package/meow)
-   [simple-git](https://www.npmjs.com/package/simple-git)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

-   npm
    ```sh
    npm install wooff -g
    ```
-   yarn
    ```sh
    yarn add wooff -g
    ```

*   Add sudo before the code if facing error due to system permissions
*   Enter system password if prompted

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Checking Installation

To confirm if wooff is installed

-   run
    ```sh
    wooff
    ```
-   or
    ```sh
    wooff -v
    ```

### Entering Arguments

`cd` to the directory where the csv file is located

-   run

    ```sh
    wooff -c [CSV File Name].csv -p [Package Name]@[Package Version]
    ```

    Enter your GitHub Personal Access Token in the prompt
    <br/>
    <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">Creating a Personal Access Token</a>

-   example input
    ```sh
    wooff -c csv.csv -p axios@0.23.0
    ```
-   example output
    ![version-satisfaction]

### Updating Repos

Add the -u flag to send Pull requests to the repositories with updated package version

-   run

    ```sh
    wooff -c [CSV File Name].csv -p [Package Name]@[Package Version] -u
    ```

-   example input
    ```sh
    wooff -c csv.csv -p axios@0.23.0 -u
    ```
-   example output
    ![version-update]

<p align="right">(<a href="#top">back to top</a>)</p>

## Miscellaneous Screenshots

- loading
![loading]

- error handling
![error1]

![error2]

![error3]

![error4]


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] One time GitHub authentication
-   [ ] Automatic dependency checker
    -   [ ] Dependency update notifications
    -   [ ] Automatic Pull requests
-   [ ] Configuration options
-   [ ] Allowing package@latest as argument

See the [open issues](https://github.com/dyte-submissions/dyte-vit-2022-shashtag/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Shashwat Gupta (shashtag) - [@ShashTagZero](https://twitter.com/ShashTagZero) - shashwatsatna@gmail.com

Project Link: [https://github.com/dyte-submissions/dyte-vit-2022-shashtag](https://github.com/dyte-submissions/dyte-vit-2022-shashtag)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[contributors-url]: https://github.com/dyte-submissions/dyte-vit-2022-shashtag/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[forks-url]: https://github.com/dyte-submissions/dyte-vit-2022-shashtag/network/members
[stars-shield]: https://img.shields.io/github/stars/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[stars-url]: https://github.com/dyte-submissions/dyte-vit-2022-shashtag/stargazers
[issues-shield]: https://img.shields.io/github/issues/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[issues-url]: https://github.com/dyte-submissions/dyte-vit-2022-shashtag/issues
[license-shield]: https://img.shields.io/github/license/dyte-submissions/dyte-vit-2022-shashtag.svg?style=for-the-badge
[license-url]: https://github.com/dyte-submissions/dyte-vit-2022-shashtag/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shashtag
[product-screenshot]: images/dogo.jpeg
[version-satisfaction]: images/version.png
[version-update]: images/update.png
[loading]: images/loading.png
[error1]: images/error1.png
[error2]: images/error2.png
[error3]: images/error3.png
[error4]: images/error4.png
