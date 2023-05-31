# Styleguide | Data Privacy Handbook

This is the styleguide for the [Data Privacy Handbook](https://utrechtuniversity.github.io/dataprivacyhandbook). 
If you'd like to contribute to the Handbook, please follow these guidelines, so we can keep the language, spelling, wording, etc. consistent across the Handbook.

## British spelling

We follow the Utrecht University guidelines, we use British English spelling. That means:

- Anonymisation, not anonymization
- Behaviour, not behavior
- Travelling, not traveling

## Easy to understand language

It is important that the Handbook is easy to understand for researchers using it:

- Where possible and applicable, use active language. So not "a privacy scan should be performed", but "you should perform a privacy scan".
- Use concrete sentences and words. So not  "it takes a while", but "it takes between 1 and 3 months".
- Avoid legal terminology where possible. As privacy is quite a legal subject, this can be quite a challenge!
- Limit the length of sentences, preferably to under 25 words per sentence. Shorter sentences are easier to understand than really long ones. 

## Linking to other places

Where possible, we'd like to prevent overcrowding pages with information. If any information is already elsewhere, we link to it instead.
This has the additional advantage that the Handbook is easier to maintain.
We distinguish between two types of links:

1. Links to other pages in the Handbook should be written as `[this is an internal link](#section-reference)`. 
You can find the section references in the .Rmd files in lines that start with `#` between the curly brackets: `{#section-reference}`.
2. Links to external pages should be written as `[this is an external link](https://a-url-here.com){target="_blank"}`. 
This makes sure external links are opened in a new window.

## Text, but other formats are also welcome

Although text is the most used format in the Data Privacy Handbook, we encourage other formats that may suit the content,
such as videos, infographics and click-through decision trees. Keep in mind that the format must suit the purpose and should increase understandability. 

## Accessibility and inclusivity

In line with the Utrecht University guidelines, we want the Data Privacy Handbook to be accessible and inclusive:

- Use gender-neutral rather than gendered words where possible. So "they", instead of "he" or "she".
- Include alternate text for images so make them easier to interpret by screen readers, like so: `![Alternate text for the image](img/image.png "Title of the image")`.
- Make sure there is sufficient contrast to distinguish different parts of a visual component.
- Include transcripts for videos, except if the video already has closed captions.
- Markdown is preferred over raw html. This is easier to edit, but also necessary to correctly knit to pdf format. For example:
  - `## title name {#title-name}` and not `<h2 id="title-name">title name</h2>`.
  - `:::fyi   Here is some text   :::` and not `<div class="fyi">Here is some text</div>` (there are 3 types of these special paragraphs: `fyi`, `note` and `warning`)
  - `**This is bold text**` and not `<b>This is bold text</b>`
  - You will see *some* html across the Handbook where markdown did not suffice, for example the `<details>` tag to display a click-and-expand (which does not have a markdown equivalent).

## Efficiency
In some sections of the Handbook, multiple similarly structured items are read in via a .csv file, instead of repeatedly applying the same formatting.
This is easier to edit and makes sure all items are formatted correctly.
Currently, this is the case in the following Handbook sections:

- [Privacy FAQs](https://utrechtuniversity.github.io/dataprivacyhandbook/faq.html): reads in `files/faqs.csv` in R and automatically applies html formatting to every individual FAQ.
- [Definitions](https://utrechtuniversity.github.io/dataprivacyhandbook/definitions.html): reads in a selected subset from `files/glossary.csv` in R and automatically applies html formatting to every definition. 
- [Example risks and how to mitigate them](https://utrechtuniversity.github.io/dataprivacyhandbook/example-risks.html): reads in `files/risks.csv` in R and automatically applies html formatting to every risk exampl
- [Glossary](https://utrechtuniversity.github.io/dataprivacyhandbook/glossary.html): reads in `files/glossary.csv` in R and automatically applies html formatting to every term.

If you wish to edit the *content* of these pages, you should edit the underlying .csv files in the `files` folder. If you wish to change the formatting on on these pages, you should edit the relevant .Rmd files in the `chapters` folder. Finally, if you see any other pages that could be made more efficient in the same way, please feel free do so and add the to-be-loaded files to the `files` folder.