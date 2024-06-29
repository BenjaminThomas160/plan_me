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

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("gemini")
public class GeminiService {
    @GetMapping("req")
    public String makeRequest() {
        URL url;
        String apiKey = "";
        try {
            File myObj = new File("apiKey.txt");
            Scanner myReader = new Scanner(myObj);
            apiKey = myReader.nextLine();
            myReader.close();
        } catch (Exception e) {
            System.err.println("Failed to get api key");
        }
        String query = "write a story about a magic backpack please";
        String uString = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;
        try {
            
            url = new URL(uString);
            URLConnection con = url.openConnection();
            HttpURLConnection http = (HttpURLConnection)con;
            http.setRequestMethod("POST"); // PUT is another valid option
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
        
        return "hello world";
    }
}
