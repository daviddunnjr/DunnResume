# David Dunn, Jr.'s HTML Resume

I built a structured resume to make upkeep more manageable. A consistent HTML structure makes it easier to reformat the document, and will make it easier to create an add/remove utility in the future. [Preview the resume here.](https://daviddunnjr.github.io/DunnResume/resources/)

**Contents**
- [Features](#features)
- [Operation Tips](#operation-tips)
- [To Do](#to-do)


## Features

This resume webpage includes these features:

- Resume Tools pseudo-window
    - Change themes
    - Print/ Print to PDF
    - Minimize, display, or close Resume Tools
    - Automatically hides in print
- Resume sections
    - Contact info running/sticky header
    - Experience
    - Education
- Modular HTML architecture to improve workflow

## Operation Tips

These sections describe how to operate the webpage and troubleshoot common problems.

**Contents:**
- [Enable JavaScript Content](#enable-javascript-content)
- [Print to PDF](#print-to-pdf)
- [Include Your Phone Number](#include-your-phone-number)

### Enable JavaScript Content

You'll have to run the webpage on a server to view scripted content. I use the `Live Server` extension for `Visual Studio Code`.

### Print to PDF

To avoid unintended format issues, follow these tips:

- Set print margins to `None`.
- Enable `Background graphics`.
- Scroll to the top of the page.
- Ensure page breaks function properly.  Each company entry in `Experience` avoids page breaks inside.  If this behavior affects the appearance, alter the CSS `break-inside` behavior.

> **Note:**
> The `Resume Tools` pseudo-window does not display in print.

### Include Your Phone Number

I did not want to publish my personal phone number online, so I hid it in a file called `address.html`. To include your phone number, create `resources/address.html` and insert this code with your phone number substituting the `#` symbols.

```html
<a href="tel:+###########">#-###-###-####</a>
```

## To Do

I would like to complete these tasks next:

- Add additional `float:right;` sections such as certifications or awards.
- Create a form to create new entries.
