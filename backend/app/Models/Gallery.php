<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Gallery extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'gallery';
    protected $primaryKey = 'id_gallery';
    public $timestamps = false;

    protected $fillable = [
        'path_image', 'name_event', 'date', 'id_user'
    ];

    public function user()
{
    return $this->belongsTo(User::class, 'id_user');
}
public function images()
{
    return $this->hasMany(\App\Models\GalleryImage::class, 'id_gallery', 'id_gallery');
}

}
