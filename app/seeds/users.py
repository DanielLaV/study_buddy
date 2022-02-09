from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', bio='I am the greatest Demo user who ever lived!')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', bio="Cal Tech, class of 1998. I've been working in tech for over 20 years. VMs > Docker")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', bio="I specialize in Java but occasionally do some front-end web dev.")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
