#REFERENCES:

  #email Regex:
    https://stackoverflow.com/questions/46155/how-can-an-email-address-be-validated-in-javascript

  #database Query:
    https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md

    https://stackoverflow.com/questions/42149332/how-to-properly-query-a-firebase-list-in-angularfire2

    https://stackoverflow.com/questions/48651674/argument-of-type-query-limittolast-number-orderbykey-boolean-is


#Generate APK:

1. chnage the widget id in config.xml

2. run "ionic cordova build --release android".

3. It generates the unsigned apk file..

#Sign The Apk:

1. Check Keytool in cmd, if working no problem, otherwise install jdk and add the jdk bin path to the path Environment Variable.(C:\Program Files\Java\jdk1.7.0_79\bin)

2. Then run "keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000"

    Note: Give any password as your wish.

3. After running the above cmd it will generate "my-release-key.keystore" file inside the application folder.

4. Next To sign the unsigned APK, run the "jarsigner" tool which is also included in the JDK.

5. Move the Unsign build apk to the main folder.

6. After run the cmd "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore <appname>.apk alias_name".

7. Enter the password same as given before as in step 2.
