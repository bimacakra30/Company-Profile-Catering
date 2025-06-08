<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
    use HasFactory;

    protected $table = 'gallery_image'; // Nama tabel

    protected $primaryKey = 'id_image'; // Primary key

    public $timestamps = false; // Karena di tabel kamu tidak ada created_at/updated_at

    protected $fillable = [
        'id_gallery',
        'path_image',
    ];

    // Relasi ke Gallery
    public function gallery()
    {
        return $this->belongsTo(Gallery::class, 'id_gallery', 'id_gallery');
    }
}
