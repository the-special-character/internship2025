'use server'
 
export async function createPost(formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  console.log({email, password});
  
 
  // Update data
  // Revalidate cache
}