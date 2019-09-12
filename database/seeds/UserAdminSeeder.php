<?php
use Illuminate\Http\Request;
use Illuminate\Database\Seeder;
use App\User;

class UserAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $admin = new User;
      $admin->first_name = 'giorgio';
      $admin->last_name = 'petetti';
      $admin->email = 'segreteria@montenapoleonedistrict.it' ;
      $admin->password = \Hash::make('5H!bNu9neqpXqjM@');
      $admin->country = 'it';
      $admin->image_profile = 'ciao';
      $admin->phone_number = '24234234324324';
      $admin->save();
      $admin->createToken('Laravel Password Grant Client')->accessToken;

    }
}
