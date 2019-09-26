<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Data_Entry;

class CollectData extends Controller
{
    public function store(){
        $dataEntry = new Data_Entry();

        $dataEntry->firstName = request('firstName');
        $dataEntry->lastName = request('lastName');
        $dataEntry->Email = request('Email');
        $dataEntry->TelNumber = request('TelNumber');
        $dataEntry->Gender = request('Gender');
        $dataEntry->DoB = request('DoB');
        $dataEntry->Comments = request('Comments') ? : " ";

        $dataEntry->save();
    }
}

?>
