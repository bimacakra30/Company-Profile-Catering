<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\User;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';
    protected $primaryKey = 'id_product';
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'id_category',
        'name_product',
        'price_product',
        'description',
        'path_image',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'id_category');
    }
    
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
