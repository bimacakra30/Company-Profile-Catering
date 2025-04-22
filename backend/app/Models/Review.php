<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = "review";
    protected $primaryKey = "id_review";
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'customer_name',
        'review_text',
        'created_at',
        'respon_text'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
