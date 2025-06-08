<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioImage extends Model
{
    use HasFactory;

    protected $table = 'portfolio_image';
    protected $primaryKey = 'id_image';
    public $timestamps = false;

    protected $fillable = [
        'id_portfolio',
        'path_image',
    ];

    public function portfolio()
    {
        return $this->belongsTo(Portfolio::class, 'id_portfolio', 'id_portfolio');
    }
}
