import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://meless5500_db_user:vvKJ8R0JZV2CDnVi@cluster0.cqaerdz.mongodb.net/Sobana-hotel')
  .then(() => mongoose.connection.getClient().db().collection('users').deleteMany({ email: { $in: ['admin@Sobana.com', 'user@Sobana.com', 'owner@Sobana.com'] } }))
  .then(() => mongoose.connection.getClient().db().collection('hotels').deleteMany({}))
  .then(() => mongoose.connection.getClient().db().collection('rooms').deleteMany({}))
  .then(() => mongoose.connection.getClient().db().collection('hospitalities').deleteMany({}))
  .then(() => { console.log('Deleted corrupted data'); process.exit(0); })
  .catch(err => { console.error(err); process.exit(1); })
