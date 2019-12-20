package com.company.game;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;


public class WelcomeActivity extends AppCompatActivity {

    private Button choose_theme_button;
    private RelativeLayout main_content;
    private TextView video_action_link;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);
        main_content = findViewById(R.id.welcomeparent);
       Handler  handler = new Handler();

        final Runnable r = new Runnable() {
            public void run() {
                startActivity(new Intent(getApplicationContext(), IntroActivity.class));
            }
        };

        handler.postDelayed(r, 4000);
        choose_theme_button = findViewById(R.id.choose_theme_button);
        choose_theme_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {

            }
        });

        video_action_link = findViewById(R.id.video_action_link);
        video_action_link.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {



            }
        });

    }

}
