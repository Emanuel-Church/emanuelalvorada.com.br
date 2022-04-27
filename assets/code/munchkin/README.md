
# Munchkin.JS

Munchkin.JS is a JavaScript library that aims to make it easier to customize the Select tag so it's compatible across all browsers and gives the devs some extra coffee time.


## Author and Manager

- [@hheenry](https://www.github.com/hheenry)
- [@FLCOMPY](https://www.github.com/FLCOMPY)


## Links

 - [GitHub](https://github.com/hheenry/munchkin.js)
 - [Docs](https://docs.flcompy.com/munchkin/)
 - [Support](https://support.flcompy.com/libs/js/munchkin/)


## Features

- Temas dark e light
- Easy customization
- Compatible with all browsers
- Use with CDN or NPM

## Using the CDN

To use the Munchkin.JS CDN just add the following lines to your code.

- Head of HTML

```html
    <!-- Start - Munchkin CSS -->
    <link rel="stylesheet" href="http://code.flcompy.com/munchkin/dist/css/2UXMNp.css">
    <!-- End - Munchkin CSS -->
```

- At the end of the HTML Body

```html
    <!-- Start - Munchkin.JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="http://code.flcompy.com/munchkin/dist/js/HOiWdp.js"></script>
    <!-- End - Munchkin.JS -->
```


## Settings

- Colour mode

By default Munchkin's colour settings are in Dark mode, but if you want to lessen the work of customising the selects you can use Light mode by just changing the name of a file.

```html
    <!-- Dark Mode - Munchkin standard -->
    <link rel="stylesheet" href="http://code.flcompy.com/munchkin/dist/css/2UXMNp.css">
```

```html
    <!-- Light Mode - Munchkin standard -->
    <link rel="stylesheet" href="http://code.flcompy.com/munchkin/dist/css/pfoBd4.css">
```

- Reduced file

In the CSS files certain animations and stylizations are placed by default to make Munchkin more beautiful and smooth, but the dev can choose not to use these settings, see below how to leave the files only with the necessary content.

```html
    <!-- Light Mode low - Munchkin standard -->
    <link rel="stylesheet" href="http://code.flcompy.com/munchkin/dist/css/pfoBd4.low.css">
```
- The Reduced file is not available for the light mode.


## My select

For Munchkin to work the select will be created with the options normally, see an example below: 

```html
    <select name="UF" id="uf" required>
        <option value="diseble" selected disabled>Seu estado</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="EX">Estrangeiro</option>
    </select>
```

To make the select a noa face just put the class "my-munchkin", if you already have your own class and need it to continue just keep it together with the munchkin's one.

```html
    <select name="UF" id="uf" class="my-munchkin myclass" required>
        <option value="diseble" selected disabled>Seu estado</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="EX">Estrangeiro</option>
    </select>
```

In all selects that you want the change to be made, simply put the Munchkin class and you're done.


## License

- MIT


## See working code

See the Munchkin code running and showing each element that is created to work.

- [View codes](https://codepen.io/hheenry/pen/ZEaeNON)