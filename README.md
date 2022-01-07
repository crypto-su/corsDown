#### Head Add

```html
<script src="cDg-min.js"></script>
```

#### Body Add

```html
<img id="image1" src="https://remoteurl.example.com/img1.jpg" width="200" height="200">
<img id="image2" src="https://remoteurl.example.com/img2.png" width="200" height="200">

    <script>

        let newUri1 = new cDg('image1').view();
        let newUri2 = new cDg('image2').view();

        //console.log('New_Image_Url 1: '+ newUri1);
        //console.log('New_Image_Url 2: '+ newUri2);

    </script>
```

#### Example html
Or you can download and run example.html
    
