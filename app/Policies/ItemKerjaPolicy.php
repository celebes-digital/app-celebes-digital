<?php

namespace App\Policies;

use App\Models\ItemKerja;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ItemKerjaPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'cto';
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ItemKerja $itemKerja): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'cto';
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role->name === 'cto';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ItemKerja $itemKerja): bool
    {
        return $user->role->name === 'cto';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ItemKerja $itemKerja): bool
    {
        return $user->role->name === 'cto';
    }

    public function deleteAny(User $user): bool
    {
        return $user->role->name === 'cto';
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, ItemKerja $itemKerja): bool
    {
        return $user->role->name === 'cto';
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, ItemKerja $itemKerja): bool
    {
        return $user->role->name === 'cto';
    }
}
