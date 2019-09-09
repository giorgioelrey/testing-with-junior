<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendMailController extends Controller
{
    public function sendContactFormMail($page, Request $request){

        $validatedData = $request->validate([
            'first_name' => 'required|min:3|max:50',
            'last_name' => 'required|min:3|max:50',
            'message_body' => 'required|min:5'
        ]);

        $to = $page == 'contatti' ? 'segreteria@montenapoleonedistrict.it': 'contact@mnlounge.it';
        $subject = "montenapoleone test {$page}";
        $message = "Da {$validatedData['first_name']} {$validatedData['last_name']}, messaggio: {$validatedData['message_body']}";

        // Sending email
        if(mail($to, $subject, $message)){
            redirect()->back();
        } else{
            redirect()->back();
        }

    }
}
