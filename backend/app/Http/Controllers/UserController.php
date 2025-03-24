<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('status', 'Active')->get();
        return view('users.index', compact('users'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:45',
            'username' => 'required|string|max:30|unique:users,username',
            'password' => 'required|string|min:8',
            'level' => 'required|in:owner,staff',
            'status' => 'required|in:active,deactive',
        ]);

        $validatedData['password'] = bcrypt($validatedData['password']);

        User::create($validatedData);

        return redirect()->route('users.index')->with('success', 'Pengguna berhasil ditambahkan.');
    }

    public function edit($id_user)
    {
        $user = User::find($id_user);

        if (!$user) {
            return redirect()->route('users.index')->with('error', 'Pengguna tidak ditemukan.');
        }

        return view('users.edit', compact('user'));
    }
    public function update(Request $request, $id_user)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:45',
            'username' => 'required|string|max:30|unique:users,username,' . $id_user . ',id_user',
            'password' => 'nullable|string|min:8',
            'level' => 'required|in:Owner,Staff',
            'status' => 'required|in:Active,Deactive',
        ]);
    
        $user = User::where('id_user', $id_user)->first();
    
        if (!$user) {
            return redirect()->route('users.index')->with('error', 'Pengguna tidak ditemukan.');
        }
    
        if ($request->filled('password')) {
            $validatedData['password'] = bcrypt($validatedData['password']);
        } else {
            unset($validatedData['password']);
        }
        $user->update($validatedData);
    
        return redirect()->route('users.index')->with('success', 'Pengguna berhasil diperbarui.');
    }

    public function deactivate($id_user)
{
    $user = User::where('id_user', $id_user)->first();

    if (!$user) {
        return redirect()->route('users.index')->with('error', 'Pengguna tidak ditemukan.');
    }
    
    $user->status = 'Deactive';
    $user->save();

    return redirect()->route('users.index')->with('success', 'Pengguna berhasil dinonaktifkan.');
}

    
    
}