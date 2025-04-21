namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaketController extends Controller
{
    public function prasmanan()
    {
        return view('paket.prasmanan');
    }

    public function nasiBox()
    {
        return view('paket.nasi-box');
    }

    public function snack()
    {
        return view('paket.snack');
    }

    public function hampers()
    {
        return view('paket.hampers');
    }

    public function produkLain()
    {
        return view('paket.produk-lain');
    }
}