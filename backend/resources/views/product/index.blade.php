<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Category - {{ $category->name_category }}</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper">
        @include('layouts.navbar')
        @include('layouts.sidebar')

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Category: {{ $category->name_category }}</h1>
                            <!-- Tombol untuk membuka modal create -->
                            <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#createModal">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0">Product In Category {{ $category->name_category }}</h5>
                        </div>
                        <div class="card-body">
                            @if($products->count())
                            <table class="table table-bordered">
                                <thead class="text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Added By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($products as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td class="text-center">
                                            <img src="{{ asset('storage/' . $item->path_image) }}" width="100" class="img-thumbnail" alt="{{ $item->name_product }}">
                                        </td>
                                        <td>{{ $item->name_product }}</td>
                                        <td>{{ number_format($item->price_product, 2) }}</td>
                                        <td>{{ $item->description }}</td>
                                        <td>{{ $item->user->name ?? 'Tidak Diketahui' }}</td>
                                        <td>
                                            <button class="btn btn-warning btn-edit"
                                                data-id="{{ $item->id_product }}"
                                                data-name="{{ $item->name_product }}"
                                                data-price="{{ $item->price_product }}"
                                                data-description="{{ $item->description }}"
                                                data-category="{{ $item->id_category }}"
                                                data-image="{{ asset('storage/' . $item->path_image) }}">
                                                <i class="fa fa-pencil-alt"></i>
                                            </button>
                                            <button class="btn btn-danger btn-delete" data-id="{{ $item->id_product }}">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            @else
                            <div class="alert alert-warning text-center mb-0">
                                There are no products in this category.
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>Product Name</label>
                                <input type="text" name="name_product" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Description</label>
                                <textarea name="description" class="form-control" rows="3" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label>Price</label>
                                <input type="number" name="price_product" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Category</label>
                                <select name="id_category" class="form-control" required>
                                    @foreach($categories as $category)
                                    <option value="{{ $category->id_category }}">{{ $category->name_category }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="mb-3">
                                <label>Image</label>
                                <input type="file" name="image" class="form-control" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Save</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="editForm" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>Product Name</label>
                                <input type="text" name="name_product" id="editName" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Description</label>
                                <textarea name="description" id="editDescription" class="form-control" rows="3" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label>Price</label>
                                <input type="number" name="price_product" id="editPrice" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Category</label>
                                <select name="id_category" id="editCategory" class="form-control" required>
                                    <option value="">-- Pilih Kategori --</option>
                                    @foreach ($categories as $category)
                                    <option value="{{ $category->id_category }}">{{ $category->name_category }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="mb-3">
                                <label>Image (Optional)</label>
                                <input type="file" name="image" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label>Current Image</label><br>
                                <img id="currentImage" src="" class="img-fluid rounded mb-2" style="max-height: 200px;">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Save Changes</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="deleteForm">
                    @csrf
                    @method('DELETE')
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirm Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this product?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-danger">Delete</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>

    <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $('.btn-edit').click(function() {
            const id = $(this).data('id');
            const name = $(this).data('name');
            const price = $(this).data('price');
            const description = $(this).data('description');
            const category = $(this).data('category');
            const imageSrc = $(this).data('image');
            const url = "{{ route('product.update', ':id') }}".replace(':id', id);

            $('#editForm').attr('action', url);
            $('#editName').val(name);
            $('#editPrice').val(price);
            $('#editDescription').val(description);
            $('#editCategory').val(category);
            $('#currentImage').attr('src', imageSrc);
            new bootstrap.Modal(document.getElementById('editModal')).show();
        });

        $('.btn-delete').click(function() {
            const id = $(this).data('id');
            const action = '{{ route("product.destroy", ":id") }}'.replace(':id', id);
            $('#deleteForm').attr('action', action);
            new bootstrap.Modal(document.getElementById('deleteModal')).show();
        });
    </script>

    @if(session('success'))
    <script>
        Swal.fire({
            position: "center",
            icon: "success",
            title: "{{ session('success') }}",
            showConfirmButton: false,
            timer: 2000
        });
    </script>
    @endif
</body>

</html>