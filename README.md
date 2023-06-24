# Playground

## Bootstrap
- React project `npm create vite@latest`. Select React and Javascript.
- Add this line to the `index.html` file.

```html
    <div id="root" data-b="${request.crafterSpaBaseUrl}" data-s="${siteContext.siteName}"></div>
```

- Change `main.jsx` to match the file in this repo.
- Create the `spa.groovy` filter under `scripts/filters`.
- Create the `spa.ftl` template under `templates/web`.
- Assign this template to the `entry` page content type.
- Make use of this filter in the engine configuration file and activate the spa mode.

```xml
<site>
    <version>4.0.1</version>
    <spa>
        <enabled>true</enabled>
        <viewName>/</viewName>
    </spa>
    <filters>
        <filter>
            <script>/scripts/filters/spa.groovy</script>
            <mapping>
                <include>/**</include>
            </mapping>
        </filter>
    </filters>
</site>
```