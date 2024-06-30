package com.pm.pm;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;




@RestController
@CrossOrigin
@RequestMapping("/gemini")
public class GeminiService {
    @CrossOrigin
    @RequestMapping(path = "/req", method=RequestMethod.POST)
    public String makeRequest(@RequestBody Query qIn) {
//        URL url;
//        String apiKey = getApiKey();
        
        String query = qIn.toString();
        System.out.println(query);
        return query;
        /*String uString = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;
        try {
            url = new URL(uString);
            URLConnection con = url.openConnection();
            HttpURLConnection http = (HttpURLConnection)con;
            http.setRequestMethod("POST");
            http.setDoOutput(true);
            String q = "{\"contents\": [{\"parts\":[{\"text\": \"" + query + "\"}]}]}";
            byte[] out = q.getBytes(StandardCharsets.UTF_8);
            int length = out.length;

            http.setFixedLengthStreamingMode(length);
            http.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            http.connect();
            try(OutputStream os = http.getOutputStream()) {
                os.write(out);
            } 
            try (InputStream o = http.getInputStream()) {
                Scanner s = new Scanner(o).useDelimiter("\\A");
                String result = s.hasNext() ? s.next() : "";
                System.out.println(result);
                s.close();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return "hello world";*/
    }

    public String getApiKey() {
        String ret = "";
        try {
            File myObj = new File("apiKey.txt");
            Scanner myReader = new Scanner(myObj);
            ret = myReader.nextLine();
            myReader.close();
        } catch (Exception e) {
            System.err.println("Failed to get api key");
        }
        return ret;
    }
}
