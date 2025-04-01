# David Dunn, Jr.'s HTML Resume

I built a structured resume to make upkeep more manageable. A consistent HTML structure makes it easier to reformat the document, and will make it easier to create an add/remove utility in the future.

**Contents**
- [Exciting Features](#exciting-features)
- [Enable JavaScript Content]
- [Print to PDF](#print-to-pdf)
- [Include Your Phone Number](#include-your-phone-number)
- [To Do](#to-do)


## Exciting Features

The first iteration of this resume brings these exciting features:

- A class for every data field type maximizes stylesheet utility.
- A sticky table header for identifying information provides a running heading in web or print.
- Page structure and default style maximizes compatibility with `Print to PDF`.

## Enable JavaScript Content

You'll have to run the website on a server to view scripted content. I use the `Live Server` extension for `Visual Studio Code`.

## Print to PDF

To avoid unintended format issues, follow these tips:

- Set print margins to `None`.
- Enable `Background graphics`.
- Scroll to the top of the page.
- Ensure page breaks function properly.  Each company entry in `Experience` avoids page breaks inside.  If this behavior affects the appearance, alter the CSS `break-inside` behavior.

## Include Your Phone Number

I did not want to publish my personal phone number online, so I hid it in a file called `address.html`. To include your phone number, create `resources/address.html` and insert this code with your phone number substituting the `#` symbols.

```html
<a href="tel:+###########">#-###-###-####</a>
```

## To Do

I would like to complete these tasks next:

- Add additional `float:right;` sections such as certifications or awards.
- Create a form to create new entries.
- Create a more minimal theme.
