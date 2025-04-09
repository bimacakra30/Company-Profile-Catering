<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Portfolio extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'portfolio';
    protected $primaryKey = 'id_portfolio';
    public $timestamps = false;

    protected $fillable = [
        'path_image', 'name_activity' ,'description', 'date_activity', 'id_user'
    ];

    public function user()
{
    return $this->belongsTo(User::class, 'id_user');
}
}
